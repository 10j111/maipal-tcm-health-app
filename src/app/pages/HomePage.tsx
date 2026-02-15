import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { MaiPalBottomNav } from '../components/MaiPalBottomNav';
import { useCheck } from '../context/CheckContext';

export default function HomePage() {
  const navigate = useNavigate();
  const { hasDailyCheck } = useCheck();
  const [inputValue, setInputValue] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, role: 'ai', message: '新的一天开始了\n脉脉想知道你的身体情况！' }
  ]);
  const [nextId, setNextId] = useState(2);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMessage = { id: nextId, role: 'user', message: inputValue };
    let newHistory = [...chatHistory, userMessage];
    if (newHistory.length > 3) newHistory = newHistory.slice(1);
    setChatHistory(newHistory);
    setInputValue('');
    setNextId(nextId + 1);

    setTimeout(() => {
      let response = '我明白了。请继续告诉我更多细节。';
      if (inputValue.includes('累')) response = '我理解您的感受。建议注意休息。';
      const aiMessage = { id: nextId + 1, role: 'ai', message: response };
      let updatedHistory = [...newHistory, aiMessage];
      if (updatedHistory.length > 3) updatedHistory = updatedHistory.slice(1);
      setChatHistory(updatedHistory);
      setNextId(nextId + 2);
    }, 1000);
  };

  return (
    <div className="bg-white relative h-screen overflow-hidden">
      <div className="absolute bg-gradient-to-b from-[rgba(236,209,180,0.6)] h-[500px] left-0 to-transparent top-0 w-full pointer-events-none z-0" />
      
      <div className="absolute flex items-start justify-between left-[21px] top-[28px] w-[350px] z-30">
        <div className="flex flex-col gap-2">
          <p className="text-[24px] font-medium text-black">你好 CC!</p>
          <p className="text-[24px] font-medium text-black">早上好！我是脉脉！</p>
        </div>
        <button onClick={() => navigate('/settings')} className="bg-[rgba(236,209,180,0.8)] rounded-[12px] size-[48px] hover:bg-[rgba(236,209,180,1)]">
          ⚙️
        </button>
      </div>

      <div className="absolute left-[-28px] size-[450px] top-[262px] z-10 pointer-events-none">
        <div className="absolute bg-[rgba(236,209,180,0.1)] blur-[64px] rounded-full size-[700px] top-[-125px]" />
        <div className="absolute inset-0 bg-[#ecd1b4]/20 rounded-full" />
        
        <div className="absolute w-[450px] top-0 left-0 pointer-events-auto">
          <AnimatePresence mode="popLayout">
            {chatHistory.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative bg-white/80 p-4 rounded-[20px] shadow-lg mb-4 ml-12 w-[280px]"
              >
                <p className="text-[18px] text-black whitespace-pre-wrap">{chat.message}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {!hasDailyCheck && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute left-[20px] top-[590px] w-[350px] z-20">
            <button onClick={() => navigate('/check-start')} className="bg-white border rounded-[14px] shadow-md h-[78px] w-full flex items-center px-4">
              <div className="bg-[#ecd1b4] size-10 rounded-lg mr-3 flex items-center justify-center">🩺</div>
              <div className="flex-1 text-left">
                <p className="font-bold text-[20px]">每日检测</p>
                <p className="text-[17px] text-black/40">望闻问切</p>
              </div>
              <span>→</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bg-white/75 flex items-center left-[20px] p-4 rounded-[24px] shadow-lg top-[684px] w-[350px] z-20">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入您的回答..."
          className="flex-1 text-[20px] outline-none bg-transparent"
        />
        <button onClick={handleSend} className="bg-[#ecd1b4] rounded-[12px] p-2 ml-2">发送</button>
      </div>

      <MaiPalBottomNav currentTab="chat" />
    </div>
  );
}
