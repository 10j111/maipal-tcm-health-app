/**
 * MaiPal APP 设计规范演示页面
 * 展示所有标准化组件的使用方法
 */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  MaiPalPage,
  MaiPalHeader,
  MaiPalButton,
  MaiPalSkipButton,
  MaiPalInput,
  MaiPalCard,
  MaiPalProgress,
  MaiPalProgressText,
  MaiPalBubble,
  MaiPalLoading,
  MaiPalEmpty,
  MaiPalTag,
  MaiPalDivider,
} from './MaiPalUI';

export default function DesignSystemDemo() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('全部');

  return (
    <MaiPalPage>
      <MaiPalHeader
        onBack={() => navigate('/home')}
        title="设计规范演示"
        showMenu
        onMenuClick={() => console.log('Menu clicked')}
      >
        <p className="text-[20pt] font-medium text-black mt-2">
          MaiPal APP UI 组件库
        </p>
      </MaiPalHeader>

      <div className="relative z-10 flex-1 overflow-y-auto hide-scrollbar px-7 mt-6 pb-24 space-y-8">
        <section>
          <h2 className="mb-4">字体规范</h2>
          <div className="space-y-4">
            <div>
              <h1>H1 标题 - 28pt/36pt Bold</h1>
              <p className="text-black/40">思源黑体 / SF Pro</p>
            </div>
            <div>
              <h2>H2 标题 - 24pt/32pt Bold</h2>
              <p className="text-black/40">思源黑体 / SF Pro</p>
            </div>
            <div>
              <p>正文文本 - 16pt/24pt Regular</p>
              <p className="text-black/40">字间距 0.5pt</p>
            </div>
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">按钮组件（高度48pt，圆角12pt）</h2>
          <div className="space-y-3">
            <MaiPalButton variant="primary">
              主按钮 Primary
            </MaiPalButton>
            <MaiPalButton variant="secondary">
              次要按钮 Secondary
            </MaiPalButton>
            <MaiPalButton variant="outline">
              描边按钮 Outline
            </MaiPalButton>
            <MaiPalButton variant="text">
              文本按钮 Text
            </MaiPalButton>
            <div className="flex justify-center">
              <MaiPalSkipButton>跳过此步骤</MaiPalSkipButton>
            </div>
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">输入框（高度48pt，圆角8pt）</h2>
          <div className="space-y-4">
            <MaiPalInput
              label="姓名"
              placeholder="请输入您的姓名"
            />
            <MaiPalInput
              label="手机号"
              type="tel"
              placeholder="请输入手机号"
            />
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">进度条（宽度280pt，高度4pt）</h2>
          <div className="space-y-4">
            <div>
              <MaiPalProgress steps={4} currentStep={1} />
              <MaiPalProgressText currentStep={1} totalSteps={4} className="mt-2" />
            </div>
            <div>
              <MaiPalProgress steps={4} currentStep={2} />
              <MaiPalProgressText currentStep={2} totalSteps={4} className="mt-2" />
            </div>
            <div>
              <MaiPalProgress steps={4} currentStep={3} />
              <MaiPalProgressText currentStep={3} totalSteps={4} className="mt-2" />
            </div>
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">卡片组件（圆角16pt）</h2>
          <div className="space-y-3">
            <MaiPalCard>
              <h3 className="mb-2">普通卡片</h3>
              <p className="text-black/60">这是一个标准卡片组件</p>
            </MaiPalCard>
            <MaiPalCard hoverable onClick={() => console.log('Card clicked')}>
              <h3 className="mb-2">可点击卡片</h3>
              <p className="text-black/60">悬停时有阴影效果</p>
            </MaiPalCard>
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">标签组件</h2>
          <div className="flex gap-2 flex-wrap">
            {['全部', '饮食', '作息', '生活习惯'].map((tab) => (
              <MaiPalTag
                key={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </MaiPalTag>
            ))}
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">对话气泡（圆角12pt，最大宽度280pt）</h2>
          <div className="space-y-3">
            <MaiPalBubble variant="ai">
              你好！我是脉脉，很高兴为你服务。
            </MaiPalBubble>
            <MaiPalBubble variant="user">
              你好脉脉，我想了解一下今天的身体状况。
            </MaiPalBubble>
          </div>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">加载状态</h2>
          <MaiPalCard>
            <MaiPalLoading text="正在分析中..." />
          </MaiPalCard>
        </section>

        <MaiPalDivider />

        <section>
          <h2 className="mb-4">空状态</h2>
          <MaiPalCard>
            <MaiPalEmpty
              icon="📭"
              title="暂无记录"
              description="还没有任何检测记录，开始第一次检测吧"
              action={
                <MaiPalButton variant="primary">
                  开始检测
                </MaiPalButton>
              }
            />
          </MaiPalCard>
        </section>

        <section>
          <h2 className="mb-4">间距系统（8pt栅格）</h2>
          <div className="space-y-2 text-[14pt]">
            <div className="flex items-center gap-2">
              <div className="w-[8pt] h-[8pt] bg-[#ecd1b4]" />
              <span>--spacing-xs: 8pt (1 unit)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[12pt] h-[12pt] bg-[#ecd1b4]" />
              <span>--spacing-sm: 12pt (1.5 units)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[16pt] h-[16pt] bg-[#ecd1b4]" />
              <span>--spacing-md: 16pt (2 units)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[24pt] h-[24pt] bg-[#ecd1b4]" />
              <span>--spacing-lg: 24pt (3 units)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[32pt] h-[32pt] bg-[#ecd1b4]" />
              <span>--spacing-xl: 32pt (4 units)</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4">颜色系统</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#ecd1b4]" />
              <div>
                <p className="font-medium">主色 Primary</p>
                <p className="text-[14pt] text-black/60">#ECD1B4</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#d3b697]" />
              <div>
                <p className="font-medium">主色深色</p>
                <p className="text-[14pt] text-black/60">#D3B697</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white border border-gray-200" />
              <div>
                <p className="font-medium">背景色</p>
                <p className="text-[14pt] text-black/60">#FFFFFF</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MaiPalPage>
  );
}
