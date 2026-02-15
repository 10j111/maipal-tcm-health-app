import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { MaiPalBottomNav } from '../components/MaiPalBottomNav';
import { useCheck } from '../context/CheckContext';

export default function DailyViewPage() {
  const navigate = useNavigate();
  const { hasDailyCheck } = useCheck();
  const [selectedFilter, setSelectedFilter] = useState('全部');

  const filters = ['全部', '饮食', '作息', '生活习惯'];

  return (
    <div className="bg-white relative h-screen overflow-hidden flex flex-col">
      <div className="absolute bg-gradient-to-b from-[#ecd1b4]/50 to-transparent h-[800px] left-[-16px] top-[-250px] w-[420px] pointer-events-none z-0" />

      <div className="relative pt-10 px-6 z-10">
        <div className="flex items-center justify-between mb-3">
          <button onClick={() => navigate('/home')} className="text-[26px]">←</button>
          <h1 className="font-bold text-[24px]">每日一见</h1>
          <button onClick={() => navigate('/settings')} className="bg-[#ecd1b4]/80 rounded-[10px] p-2">📋</button>
        </div>
        <p className="text-[18px] text-black/70">每天的计划都在这里</p>
      </div>

      <div className="relative z-10 px-6 mt-5 flex gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-2 rounded-[10px] border border-[#ecd1b4] transition-all ${
              selectedFilter === filter ? 'bg-[#ecd1b4]' : 'bg-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="relative z-10 flex-1 px-6 mt-5 pb-24 overflow-y-auto hide-scrollbar">
        {!hasDailyCheck ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
            <h2 className="font-bold text-[21px]">今日还没有检测哦！</h2>
            <button onClick={() => navigate('/check-start')} className="bg-white border rounded-[14px] shadow-md h-[78px] w-full flex items-center px-4">
              <div className="bg-[#ecd1b4] size-10 rounded-lg mr-3 flex items-center justify-center">🩺</div>
              <div className="flex-1 text-left">
                <p className="font-bold text-[20px]">开始今日检测</p>
                <p className="text-[17px] text-black/40">获得个性化建议</p>
              </div>
              <span>→</span>
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <h2 className="font-bold text-[21px]">今日健康建议</h2>
            <div className="bg-white rounded-[14px] shadow-md p-4 space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[18px]">多喝温水</h3>
                <span className="bg-[#ecd1b4]/50 rounded-full px-2 py-0.5 text-[14px]">饮食</span>
              </div>
              <p className="text-[17px] text-black/60">你的舌苔显示你有点着凉，建议多喝温水。</p>
            </div>
            <button onClick={() => navigate('/check/result')} className="bg-[#ecd1b4] w-full py-4 rounded-[12px] font-medium text-[20px]">查看完整检测报告</button>
          </div>
        )}
      </div>

      <MaiPalBottomNav currentTab="daily-view" />
    </div>
  );
}
