import React from 'react';
import { CertificateData } from '../types';

interface InputFormProps {
  data: CertificateData;
  onChange: (key: keyof CertificateData, value: string) => void;
  onGenerate: () => void;
  isReady: boolean;
}

const InputForm: React.FC<InputFormProps> = ({ data, onChange, onGenerate, isReady }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span>✏️</span> Certificate Details
      </h2>
      
      <div className="space-y-4">
        {/* Member Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Member Name</label>
          <input
            type="text"
            value={data.memberName}
            onChange={(e) => onChange('memberName', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            placeholder="e.g. John Doe"
          />
        </div>

        {/* Membership Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Membership Number</label>
          <input
            type="text"
            value={data.membershipNumber}
            onChange={(e) => onChange('membershipNumber', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            placeholder="e.g. RAN/2023/001"
          />
        </div>

        {/* Membership Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Membership Category</label>
          <select
            value={data.membershipCategory}
            onChange={(e) => onChange('membershipCategory', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition bg-white"
          >
            <option value="">Select Category...</option>
            <option value="Corporate Member">Corporate Member</option>
            <option value="Individual Member">Individual Member</option>
            <option value="Student Member">Student Member</option>
            <option value="Associate Member">Associate Member</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Issue Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Issue Date</label>
            <input
              type="date"
              value={data.issueDate}
              onChange={(e) => onChange('issueDate', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            />
          </div>

          {/* Valid Until */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
            <input
              type="date"
              value={data.validUntil}
              onChange={(e) => onChange('validUntil', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <button
          onClick={onGenerate}
          disabled={!isReady}
          className={`w-full py-3 px-6 rounded-md font-bold text-white shadow-md transition-all duration-200 flex items-center justify-center gap-2
            ${isReady 
              ? 'bg-green-700 hover:bg-green-800 hover:shadow-lg transform hover:-translate-y-0.5' 
              : 'bg-gray-400 cursor-not-allowed opacity-70'
            }`}
        >
          {isReady ? '🖨️ Generate & Download PDF' : 'Fill all fields to generate'}
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
            Clicking this will open the browser print dialog. Choose "Save as PDF".
        </p>
      </div>
    </div>
  );
};

export default InputForm;