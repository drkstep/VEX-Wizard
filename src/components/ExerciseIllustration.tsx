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
      case 'w8-e1':
        return <IllustrationW8E1 isExpanded={isExpanded} />;
      case 'w8-e2':
        return <IllustrationW8E2 isExpanded={isExpanded} />;
      case 'w8-e3':
        return <IllustrationW8E3 isExpanded={isExpanded} />;
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

// W7-E1: Slider de Altura — chf() slider controls @P.y
const IllustrationW7E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex items-center gap-8">
    {/* Slider panel */}
    <div className="flex flex-col items-center gap-2">
      <div className="text-[10px] font-mono text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-0.5 rounded border border-[var(--color-secondary)]/30">
        chf()
      </div>
      <div className="relative h-28 w-3 bg-white/10 rounded-full">
        <motion.div
          className="absolute bottom-0 w-full bg-[var(--color-primary)] rounded-full"
          animate={{ height: ["20%", "90%", "45%", "75%", "20%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-5 h-5 bg-white rounded-full -left-1 shadow-md border-2 border-[var(--color-primary)]"
          animate={{ bottom: ["15%", "83%", "38%", "68%", "15%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="text-[10px] font-mono text-white/40">altura</div>
    </div>

    {/* Arrow */}
    <div className="flex flex-col items-center gap-1">
      <div className="w-8 h-0.5 bg-white/20 relative">
        <motion.div className="absolute inset-0 bg-[var(--color-primary)]" animate={{ scaleX: [0, 1, 0] }} transition={{ duration: 5, repeat: Infinity }} style={{ transformOrigin: "left" }} />
      </div>
      <div className="text-[9px] font-mono text-white/30">@P.y</div>
    </div>

    {/* Point moving on Y axis */}
    <div className="relative h-28 w-10 flex items-center justify-center">
      <div className="absolute h-full w-px border-l-2 border-dashed border-white/15" />
      <motion.div
        className="w-7 h-7 rounded-full bg-[var(--color-primary)] shadow-[0_0_16px_var(--color-primary)] z-10"
        animate={{ y: [30, -42, 8, -24, 30] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  </div>
);

// W7-E2: VDB Limpio — node pipeline: Poly → VDB → Smooth → Convert → Remesh
const IllustrationW7E2 = ({ isExpanded }: { isExpanded: boolean }) => {
  const nodes = [
    { label: "Poly", col: "rgba(255,255,255,0.3)" },
    { label: "VDB", col: "#FF6D00" },
    { label: "Smooth", col: "#FF6D00" },
    { label: "Convert", col: "#00E5FF" },
    { label: "Remesh", col: "#00E5FF" },
  ];
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1.5">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <motion.div
              className="px-2 py-1.5 rounded-lg border text-[9px] font-mono font-bold text-white text-center"
              style={{ minWidth: 42, borderColor: node.col + "50", backgroundColor: node.col + "15" }}
              animate={{ borderColor: [node.col + "30", node.col, node.col + "30"], backgroundColor: [node.col + "08", node.col + "22", node.col + "08"] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.45 }}
            >
              {node.label}
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                className="h-px w-3 rounded-full"
                animate={{ backgroundColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.1)"] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.45 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Particle flowing through */}
      <motion.div
        className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] shadow-[0_0_8px_var(--color-secondary)]"
        animate={{ x: [-90, 90] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
      />
    </div>
  );
};

// W7-E3: Mi Primer HDA — right-click on subnet → Create Digital Asset
const IllustrationW7E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative flex items-center justify-center w-48 h-40">
    {/* Subnet node */}
    <div className="w-24 h-14 rounded-xl border-2 border-white/20 bg-[var(--color-surface)] flex flex-col items-center justify-center gap-0.5 z-10">
      <div className="text-[9px] font-mono text-white/40">subnet</div>
      <div className="w-8 h-1 rounded bg-white/10" />
      <div className="w-6 h-1 rounded bg-white/10" />
    </div>

    {/* Context menu */}
    <motion.div
      className="absolute top-2 left-[calc(50%+8px)] bg-[#252525] border border-white/20 rounded-lg shadow-2xl z-20 overflow-hidden"
      style={{ minWidth: 148 }}
      animate={{ opacity: [0, 1, 1, 1, 0], scale: [0.92, 1, 1, 1, 0.92], y: [-4, 0, 0, 0, -4] }}
      transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
    >
      {["Type Properties…", "Allow Editing", "Create Digital Asset"].map((item, i) => (
        <motion.div
          key={i}
          className={`px-3 py-1.5 text-[10px] font-mono border-b border-white/5 last:border-0 ${
            i === 2
              ? "text-[var(--color-primary)] font-bold"
              : "text-white/40"
          }`}
          animate={i === 2 ? { backgroundColor: ["rgba(255,109,0,0.05)", "rgba(255,109,0,0.22)", "rgba(255,109,0,0.05)"] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  </div>
);

// W8-E1: El Punto Fijo — Vellum cloth with top points pinned (orange) and fabric waving below
const IllustrationW8E1 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-col items-center gap-0">
    {/* Pinned top row */}
    <div className="flex gap-5 mb-1">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center gap-0.5">
          <div className="w-px h-3 bg-[var(--color-primary)]/60" />
          <motion.div
            className="w-5 h-5 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-primary)]/40 shadow-[0_0_10px_var(--color-primary)]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
          />
        </div>
      ))}
    </div>

    {/* Cloth threads */}
    <div className="flex gap-5">
      {[0, 1, 2, 3].map((col) => (
        <motion.div
          key={col}
          className="w-px h-14 bg-white/25 origin-top rounded-full"
          animate={{ skewX: [0, (col - 1.5) * 10, -(col - 1.5) * 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: col * 0.2, ease: "easeInOut" }}
        />
      ))}
    </div>

    {/* Free bottom row */}
    <div className="flex gap-5">
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-4 h-4 rounded-full bg-white/50 border border-white/20"
          animate={{ y: [0, 10, -5, 7, 0], x: [0, (i - 1.5) * 4, -(i - 1.5) * 4, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>

    <div className="text-[9px] font-mono text-[var(--color-primary)]/60 mt-2">pinesVellum · fixed</div>
  </div>
);

// W8-E2: Inflando la Esfera — Vellum balloon inflation with pressure
const IllustrationW8E2 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="relative w-44 h-44 flex items-center justify-center">
    {/* Outer glow ring */}
    <motion.div
      className="absolute rounded-full border border-[var(--color-secondary)]/20"
      animate={{ width: [60, 130, 60], height: [60, 130, 60], opacity: [0.6, 0, 0.6] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Inflating sphere */}
    <motion.div
      className="rounded-full border-2 border-[var(--color-secondary)] shadow-[0_0_24px_var(--color-secondary)]"
      style={{ background: "radial-gradient(circle at 35% 35%, rgba(0,229,255,0.4), rgba(0,229,255,0.1))" }}
      animate={{ width: [48, 110, 48], height: [48, 110, 48] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Air particles entering from below */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-white/50"
        style={{ left: `${42 + i * 8}%` }}
        animate={{ y: [40, 0], opacity: [0, 0.8, 0], scale: [0.5, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeIn" }}
      />
    ))}
    <div className="absolute bottom-1 text-[9px] font-mono text-[var(--color-secondary)]/60">pressure ++</div>
  </div>
);

// W8-E3: Diez Simulaciones — Wedge: multiple parallel simulation runs with varied parameters
const IllustrationW8E3 = ({ isExpanded }: { isExpanded: boolean }) => (
  <div className="flex flex-col gap-2.5 w-44">
    {[0, 1, 2, 3].map((i) => {
      const hue = 28 + i * 18;
      const fill = (i + 1) * 22;
      return (
        <div key={i} className="flex items-center gap-2">
          <div className="text-[9px] font-mono text-white/35 w-5 shrink-0">v{i + 1}</div>
          <div className="relative flex-1 h-3.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: `hsl(${hue}, 75%, 55%)` }}
              animate={{ width: ["0%", `${fill}%`] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: "easeOut", repeatDelay: 0.6 }}
            />
          </div>
          <motion.div
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: `hsl(${hue}, 75%, 55%)`, boxShadow: `0 0 6px hsl(${hue}, 75%, 55%)` }}
            animate={{ scale: [0.8, 1 + i * 0.15, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
          />
        </div>
      );
    })}
    <div className="text-[9px] font-mono text-white/25 text-center mt-1">wedge · 4 variaciones</div>
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
