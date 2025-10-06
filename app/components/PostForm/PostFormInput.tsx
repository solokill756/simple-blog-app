import React from 'react';
interface PostFormInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
}
const PostFormInput: React.FC<PostFormInputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  className = '',
}) => {
  return (
    <div className={className}>
      <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default PostFormInput;
