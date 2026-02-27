import React from 'react';
import { motion } from 'motion/react';

export function ExerciseIllustration({ exerciseId, isExpanded }: { exerciseId: string, isExpanded: boolean }) {
  const renderContent = () => {
    switch (exerciseId) {
      case 'w1-e1':
        return <IllustrationW1E1 isExpanded={isExpanded} />;
      case 'w1-e2':
        return <IllustrationW1E2 isExpanded={isExpanded} />;
      case 'w1-e3':
        return <IllustrationW1E3 isExpanded={isExpanded} />;
      case 'w1-e4':
        return <IllustrationW1E4 isExpanded={isExpanded} />;
      case 'w1-e5':
        return <IllustrationW1E5 isExpanded={isExpanded} />;
      case 'w2-e1':
        return <IllustrationW2E1 isExpanded={isExpanded} />;
      case 'w2-e2':
        return <IllustrationW2E2 isExpanded={isExpanded} />;
      case 'w2-e3':
        return <IllustrationW2E3 isExpanded={isExpanded} />;
      case 'w2-e4':
        return <IllustrationW2E4 isExpanded={isExpanded} />;
      case 'w2-e5':
        return <IllustrationW2E5 isExpanded={isExpanded} />;
      case 'w3-e1':
        return <IllustrationW3E1 isExpanded={isExpanded} />;
      case 'w3-e2':
        return <IllustrationW3E2 isExpanded={isExpanded} />;
      case 'w3-e3':
        return <IllustrationW3E3 isExpanded={isExpanded} />;
      case 'w3-e4':
        return <IllustrationW3E4 isExpanded={isExpanded} />;
      case 'w3-e5':
        return <IllustrationW3E5 isExpanded={isExpanded} />;
      case 'w4-e1':
        return <IllustrationW4E1 isExpanded={isExpanded} />;
      case 'w4-e2':
        return <IllustrationW4E2 isExpanded={isExpanded} />;
      case 'w4-e3':
        return <IllustrationW4E3 isExpanded={isExpanded} />;
      case 'w4-e4':
        return <IllustrationW4E4 isExpanded={isExpanded} />;
      case 'w4-e5':
        return <IllustrationW4E5 isExpanded={isExpanded} />;
      case 'w5-e1':
        return <IllustrationW5E1 isExpanded={isExpanded} />;
      case 'w5-e2':
        return <IllustrationW5E2 isExpanded={isExpanded} />;
      case 'w5-e3':
        return <IllustrationW5E3 isExpanded={isExpanded} />;
      case 'w5-e4':
        return <IllustrationW5E4 isExpanded={isExpanded} />;
      case 'w5-e5':
        return <IllustrationW5E5 isExpanded={isExpanded} />;
      case 'w6-e1':
        return <IllustrationW6E1 isExpanded={isExpanded} />;
      case 'w6-e2':
        return <IllustrationW6E2 isExpanded={isExpanded} />;
      case 'w6-e3':
        return <IllustrationW6E3 isExpanded={isExpanded} />;
      case 'w6-e4':
        return <IllustrationW6E4 isExpanded={isExpanded} />;
      case 'w6-e5':
        return <IllustrationW6E5 isExpanded={isExpanded} />;
      case 'w7-e1':
        return <IllustrationW7E1 isExpanded={isExpanded} />;
      case 'w7-e2':
        return <IllustrationW7E2 isExpanded={isExpanded} />;
      case 'w7-e3':
        return <IllustrationW7E3 isExpanded={isExpanded} />;
      case 'w7-e4':
        return <IllustrationW7E4 isExpanded={isExpanded} />;
      case 'w7-e5':
        return <IllustrationW7E5 isExpanded={isExpanded} />;
      default:
        return <IllustrationGeneric isExpanded={isExpanded} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)', 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
        {renderContent()}
      </div>

      {/* Expand hint */}
      {!isExpanded && (
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-[var(--color-text-muted)] font-medium uppercase tracking-widest opacity-50">
          Click para expandir
        </div>
      )}
    </div>
  );
}

const IllustrationW1E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-col items-center gap-8">
    <div className="flex gap-6">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#222] border-2 border-white/20 flex items-center justify-center text-white/50 font-mono text-sm">
            pt:{i}
          </div>
          <motion.div
            animate={{ height: [0, 20, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="w-0.5 bg-[var(--color-primary)]"
          />
          <motion.div
            animate={{ scale: [0.8, 1.1, 0.8], borderColor: ['rgba(255,255,255,0.2)', 'var(--color-primary)', 'rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            className="px-3 py-1 rounded bg-[#111] border-2 font-mono text-xs text-[var(--color-primary)]"
          >
            id:{i}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
);

const IllustrationW1E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex items-center gap-8">
    <div className="relative h-32 w-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div 
        className="absolute bottom-0 w-full bg-[var(--color-secondary)]"
        animate={{ height: ["20%", "80%", "20%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
    <motion.div
      className="rounded-full bg-[var(--color-secondary)] shadow-[0_0_20px_var(--color-secondary)]"
      animate={{ width: [30, 80, 30], height: [30, 80, 30] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const IllustrationW1E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-col items-center gap-6">
    <div className="flex gap-4">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{ backgroundColor: ["#333333", "#FF0000", "#333333"] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-xs font-bold text-white border border-white/10"
        >
          {i}
        </motion.div>
      ))}
    </div>
  </div>
);

const IllustrationW1E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-col items-center gap-8">
    <div className="flex gap-8 items-end h-32">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-col items-center relative">
          <motion.div
            animate={{ y: [0, -60, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)] z-10 flex items-center justify-center text-xs font-bold text-black"
          >
            {i}
          </motion.div>
          <div className="absolute bottom-4 w-0.5 h-16 border-l-2 border-dashed border-white/20" />
          <div className="absolute bottom-0 w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-xs text-white/40">
            {i}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const IllustrationW1E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-32 h-32 flex items-center justify-center">
    <div className="w-4 h-4 bg-white rounded-full z-10" />
    <motion.div 
      className="absolute bottom-1/2 w-1 bg-white origin-bottom"
      animate={{ height: [0, 60, 60, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -top-2 -left-1.5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-white" />
    </motion.div>
  </div>
);

const IllustrationW2E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center flex-wrap gap-2">
    {Array.from({ length: 25 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-4 h-4 rounded-full bg-gray-600"
        animate={{ 
          backgroundColor: (i > 6 && i < 9) || (i > 11 && i < 14) || (i > 16 && i < 19) ? ["#4b5563", "#ef4444", "#4b5563"] : "#4b5563" 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const IllustrationW2E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex gap-4 items-center">
    {[0, 1, 2, 3, 4].map((i) => (
      <div key={i} className="flex flex-col items-center gap-2">
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          className="text-xs font-mono text-white"
        >
          {i}
        </motion.div>
        <motion.div
          className="w-6 h-6 rounded-full bg-gray-600"
          animate={{ backgroundColor: ["#4b5563", "#10b981", "#4b5563"] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
        />
      </div>
    ))}
  </div>
);

const IllustrationW2E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-32 overflow-hidden flex items-center">
    <motion.div
      className="w-4 h-4 bg-[var(--color-primary)] rounded-full z-10"
      animate={{ x: [-20, 180] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute h-1 bg-[var(--color-primary)]/50 rounded-full"
      animate={{ x: [-20, 180], width: [0, 60, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      style={{ left: -60 }}
    />
  </div>
);

const IllustrationW2E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex gap-12 items-end h-40 border-b border-white/20 pb-2 w-48 justify-center">
    <motion.div
      className="w-12 h-12 bg-gray-400 rounded-full"
      animate={{ y: [-100, 0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
    />
    <motion.div
      className="w-6 h-6 bg-[var(--color-primary)] rounded-full"
      animate={{ y: [-100, 0, -120, -100] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
    />
  </div>
);

const IllustrationW2E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex gap-4 flex-wrap w-32 justify-center">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className="w-6 h-6 rounded-full"
        animate={{ 
          backgroundColor: ["#ef4444", "#3b82f6", "#10b981", "#ffffff", "#ffffff"],
          scale: [1, 1.2, 1, 1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
      />
    ))}
  </div>
);

const IllustrationW3E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex gap-8 items-center">
    <div className="border-2 border-dashed border-white/30 p-4 rounded-xl flex items-center justify-center relative">
      <span className="text-white/50 font-mono absolute -top-3 bg-[#0a0a0a] px-2 text-xs">float altura</span>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl font-mono text-[var(--color-secondary)]"
      >
        2.5
      </motion.div>
    </div>
    <motion.div
      className="h-0.5 bg-white/20 w-12 relative"
    >
      <motion.div 
        className="absolute top-0 left-0 h-full bg-[var(--color-secondary)]"
        animate={{ width: ["0%", "100%", "0%"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
    <motion.div
      className="bg-[var(--color-primary)] rounded-lg"
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      style={{ width: 40, height: 40 }}
    />
  </div>
);

const IllustrationW3E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-32 flex items-center justify-center">
    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/20 border-l border-dashed border-white/40" />
    <motion.div
      className="w-6 h-6 rounded-full z-10"
      animate={{ 
        x: [-80, 80, -80],
        backgroundColor: ["#3b82f6", "#3b82f6", "#f97316", "#f97316", "#3b82f6"]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const IllustrationW3E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 border border-white/10 rounded-xl">
    <motion.div
      className="absolute w-4 h-4 bg-[var(--color-primary)] rounded-full shadow-[0_0_15px_var(--color-primary)]"
      animate={{ 
        x: [20, 140, 20],
        y: [20, 140, 20],
        scale: [1, 0, 1, 0, 1]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="absolute top-2 left-2 text-xs font-mono text-white/30">[0,0,0]</div>
    <div className="absolute bottom-2 right-2 text-xs font-mono text-white/30">[1,1,1]</div>
  </div>
);

const IllustrationW3E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <div className="w-2 h-2 bg-white rounded-full z-20" />
    <motion.div
      className="absolute rounded-full border border-[var(--color-secondary)]/50 bg-[var(--color-secondary)]/10"
      animate={{ width: [0, 160], height: [0, 160], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
  </div>
);

const IllustrationW3E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-32 flex items-center justify-center gap-4">
    <motion.div
      className="w-4 h-4 bg-red-500 rounded-full z-20"
      animate={{ x: [-60, 60, -60] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-6 h-6 bg-white/20 rounded-full absolute"
        style={{ left: 20 + i * 30 }}
        animate={{ 
          scale: [1, 2, 1],
          backgroundColor: ["rgba(255,255,255,0.2)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.2)"]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const IllustrationW4E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-32 h-48 flex flex-col items-center justify-end gap-2">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <motion.div
        key={i}
        className="w-4 h-4 rounded-full bg-[var(--color-primary)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
      />
    ))}
  </div>
);

const IllustrationW4E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    {Array.from({ length: 15 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0], 
          opacity: [0, 1, 0],
          x: (Math.random() - 0.5) * 150,
          y: (Math.random() - 0.5) * 150
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const IllustrationW4E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <motion.div
      className="absolute w-4 h-4 bg-[var(--color-secondary)] rounded-full z-10"
      animate={{ x: [-60, 60, -60], y: [-40, 40, -40] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-4 h-4 bg-[var(--color-primary)] rounded-full z-10"
      animate={{ x: [60, -60, 60], y: [40, -40, 40] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.line
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{
          x1: ["calc(50% - 60px)", "calc(50% + 60px)", "calc(50% - 60px)"],
          y1: ["calc(50% - 40px)", "calc(50% + 40px)", "calc(50% - 40px)"],
          x2: ["calc(50% + 60px)", "calc(50% - 60px)", "calc(50% + 60px)"],
          y2: ["calc(50% + 40px)", "calc(50% - 40px)", "calc(50% + 40px)"]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const IllustrationW4E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40">
    <div 
      className="absolute inset-0 rounded-xl"
      style={{
        background: 'linear-gradient(to top right, #000000, #ff0000 50%, #ffff00)'
      }}
    />
    <div className="absolute bottom-2 left-2 text-xs font-mono text-white/50">U:0, V:0</div>
    <div className="absolute top-2 right-2 text-xs font-mono text-black/50">U:1, V:1</div>
  </div>
);

const IllustrationW4E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-32 h-48 flex items-center justify-center perspective-1000">
    <motion.div
      className="w-16 h-40 border-2 border-[var(--color-primary)] rounded-full"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: 60, rotateZ: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            top: `${(i / 20) * 100}%`,
            left: '50%',
            transform: `translateX(-50%) rotateY(${i * 36}deg) translateZ(30px)`
          }}
        />
      ))}
    </motion.div>
  </div>
);

const IllustrationW5E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <div className="w-16 h-16 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center relative">
      <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <motion.div
          key={angle}
          className="absolute w-8 h-0.5 bg-white origin-left"
          style={{ 
            left: '50%', 
            top: '50%',
            transform: `rotate(${angle}deg) translateX(32px)` 
          }}
          animate={{ x: [32, 40, 32] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent" />
        </motion.div>
      ))}
    </div>
  </div>
);

const IllustrationW5E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div
      className="w-24 h-24 border-b-4 border-white/20 rounded-full relative flex items-center justify-center"
      animate={{ rotate: [-30, 30, -30] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="w-4 h-4 bg-[var(--color-secondary)] rounded-full" />
      <motion.div 
        className="absolute w-1 h-20 bg-white origin-bottom"
        style={{ bottom: '50%' }}
        animate={{ rotate: [30, -30, 30] }} // Counter-rotate to stay upright
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-2 -left-1.5 w-0 h-0 border-b-[12px] border-b-white border-x-[8px] border-x-transparent" />
      </motion.div>
    </motion.div>
  </div>
);

const IllustrationW5E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-wrap gap-4 w-48 justify-center items-center h-48">
    {Array.from({ length: 9 }).map((_, i) => (
      <motion.div
        key={i}
        className="bg-white/80 rounded-sm"
        animate={{ 
          width: [10, Math.random() * 30 + 10, 10],
          height: [10, Math.random() * 30 + 10, 10]
        }}
        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const IllustrationW5E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <motion.path
        d="M 20 50 Q 50 20 80 50 T 140 50"
        fill="transparent"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{ x: [-60, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
    <motion.div
      className="absolute w-0 h-0 border-l-[16px] border-l-[var(--color-primary)] border-y-[8px] border-y-transparent"
      animate={{ 
        x: [-80, 80],
        y: [0, -30, 0, 30, 0],
        rotate: [0, -45, 0, 45, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const IllustrationW5E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-end justify-center pb-8">
    <div className="w-32 h-2 bg-white/20 rounded-full absolute bottom-6" />
    <div className="flex gap-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="relative flex flex-col items-center">
          <motion.div
            className="w-1 bg-[var(--color-secondary)] origin-bottom rounded-full"
            style={{ height: 60 - Math.abs(2 - i) * 10 }}
            animate={{ 
              rotate: [-10, 10, -10],
              skewX: [-5, 5, -5]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
          <div className="w-3 h-3 bg-white rounded-full mt-1" />
        </div>
      ))}
    </div>
  </div>
);

const IllustrationW6E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-32 flex items-center overflow-hidden">
    <div className="absolute w-full h-0.5 bg-white/20 border-t border-dashed border-white/40" />
    <motion.div
      className="w-6 h-6 bg-[var(--color-primary)] rounded-full z-10 shadow-[0_0_15px_var(--color-primary)]"
      animate={{ x: [-20, 200] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const IllustrationW6E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <div className="absolute w-full h-1 bg-blue-500/30" />
    <motion.div
      className="w-8 h-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      animate={{ y: [-40, 40, -40] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const IllustrationW6E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <div className="absolute w-32 h-32 rounded-full border border-dashed border-white/30" />
    <motion.div
      className="absolute w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[var(--color-secondary)] rounded-full shadow-[0_0_15px_var(--color-secondary)]" />
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white/50 rounded-full"
        animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  </div>
);

const IllustrationW6E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center perspective-1000">
    <motion.div
      className="w-40 h-40 border-2 border-[var(--color-primary)] rounded-full"
      style={{ transformStyle: 'preserve-3d', rotateX: 60 }}
      animate={{ scale: [0, 1.5], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <motion.div
      className="absolute w-40 h-40 border-2 border-[var(--color-primary)] rounded-full"
      style={{ transformStyle: 'preserve-3d', rotateX: 60 }}
      animate={{ scale: [0, 1.5], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: "easeOut" }}
    />
    <motion.div
      className="absolute w-40 h-40 border-2 border-[var(--color-primary)] rounded-full"
      style={{ transformStyle: 'preserve-3d', rotateX: 60 }}
      animate={{ scale: [0, 1.5], opacity: [1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 1.2, ease: "easeOut" }}
    />
  </div>
);

const IllustrationW6E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div
      className="w-24 h-24 rounded-xl shadow-2xl"
      animate={{ 
        backgroundColor: [
          "#ef4444", // Red
          "#f97316", // Orange
          "#eab308", // Yellow
          "#22c55e", // Green
          "#3b82f6", // Blue
          "#a855f7", // Purple
          "#ef4444"  // Red
        ],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        backgroundColor: { duration: 6, repeat: Infinity, ease: "linear" },
        scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
      }}
    />
  </div>
);

const IllustrationW7E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-48 flex items-end justify-center pb-4">
    <motion.div
      className="w-16 bg-[var(--color-secondary)] rounded-t-xl"
      animate={{ height: [20, 120, 60, 140, 40] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-24 bg-white/20 rounded-full">
      <motion.div
        className="w-4 h-4 bg-white rounded-full absolute -left-1"
        animate={{ y: [100, 0, 60, -20, 80] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const IllustrationW7E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    <motion.div
      className="bg-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)]"
      animate={{ 
        borderRadius: ["0%", "50%", "20%", "0%"],
        rotate: [0, 90, 180, 360],
        scale: [1, 1.2, 0.8, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: 60, height: 60 }}
    />
    <div className="absolute bottom-2 font-mono text-xs text-white/50">
      <motion.span animate={{ opacity: [1, 0, 0] }} transition={{ duration: 4, repeat: Infinity }}>0</motion.span>
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 4, repeat: Infinity }}>1</motion.span>
      <motion.span animate={{ opacity: [0, 0, 1] }} transition={{ duration: 4, repeat: Infinity }}>2</motion.span>
    </div>
  </div>
);

const IllustrationW7E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-48 flex items-center justify-center perspective-1000">
    <motion.div
      className="w-4 h-4 bg-white rounded-full absolute z-20 shadow-[0_0_15px_white]"
      animate={{ 
        x: [-40, 40, 0, -40],
        y: [-40, 0, 40, -40],
        scale: [1, 1.5, 0.8, 1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <div className="w-32 h-32 border border-dashed border-white/20 rounded-full" style={{ transform: 'rotateX(60deg)' }} />
    <div className="w-32 h-32 border border-dashed border-white/20 rounded-full absolute" style={{ transform: 'rotateY(60deg)' }} />
  </div>
);

const IllustrationW7E4 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex gap-1 items-center justify-center w-48 h-20">
    {Array.from({ length: 20 }).map((_, i) => (
      <motion.div
        key={i}
        className="w-2 h-12 rounded-full"
        style={{ 
          backgroundColor: `hsl(${(i / 20) * 360}, 80%, 60%)` 
        }}
        animate={{ height: [48, 24, 48] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const IllustrationW7E5 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-48 h-32 flex items-center overflow-hidden">
    <div className="absolute w-full h-0.5 bg-white/20 border-t border-dashed border-white/40" />
    <motion.div
      className="w-6 h-6 bg-[var(--color-secondary)] rounded-full z-10 shadow-[0_0_15px_var(--color-secondary)]"
      animate={{ x: [-20, 200] }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        times: [0, 1],
        ease: [0.1, 0.9, 0.2, 1] // Custom ease for fast then slow
      }}
    />
    <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center">
      <motion.div 
        className="w-1 h-3 bg-white origin-bottom"
        style={{ bottom: '50%' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </div>
);

const IllustrationGeneric = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative w-40 h-40">
      {/* Central node */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-6 h-6 bg-[var(--color-primary)] rounded-full shadow-[0_0_20px_var(--color-primary)] z-10"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Orbiting nodes */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-full h-full"
          style={{ transformOrigin: 'center' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear", delay: i * 2 }}
        >
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-[var(--color-secondary)] rounded-full shadow-[0_0_10px_var(--color-secondary)] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-0.5 h-1/2 bg-gradient-to-t from-[var(--color-primary)]/50 to-[var(--color-secondary)]/50 origin-top -translate-x-1/2 rotate-180" />
        </motion.div>
      ))}
    </div>
    {isExpanded && (
      <div className="absolute bottom-8 text-center">
        <p className="text-[var(--color-secondary)] font-mono text-sm bg-[var(--color-secondary)]/10 px-4 py-2 rounded-lg border border-[var(--color-secondary)]/20">
          // VEX Logic Visualization
        </p>
      </div>
    )}
  </div>
);
