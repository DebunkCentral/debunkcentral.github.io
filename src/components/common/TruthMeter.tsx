import React from 'react';
import { Info } from 'lucide-react';

type TruthLevel = 'true' | 'mostly-true' | 'mixed' | 'mostly-false' | 'false';

interface TruthMeterProps {
  level: TruthLevel;
  className?: string;
}

const TruthMeter: React.FC<TruthMeterProps> = ({ level, className = '' }) => {
  const getLabel = () => {
    switch (level) {
      case 'true': return 'True';
      case 'mostly-true': return 'Mostly True';
      case 'mixed': return 'Mixed';
      case 'mostly-false': return 'Mostly False';
      case 'false': return 'False';
      default: return 'Unverified';
    }
  };

  const getLabelColor = () => {
    switch (level) {
      case 'true': return 'text-success-500';
      case 'mostly-true': return 'text-success-500';
      case 'mixed': return 'text-warning-500';
      case 'mostly-false': return 'text-error-500';
      case 'false': return 'text-error-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <Info className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-sm font-medium text-gray-600">Truth Rating</span>
        </div>
        <span className={`text-sm font-bold ${getLabelColor()}`}>
          {getLabel()}
        </span>
      </div>
      <div className="truth-scale">
        <div className={`truth-scale-bar truth-level-${level}`}></div>
      </div>
    </div>
  );
};

export default TruthMeter;