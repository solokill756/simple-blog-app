import React from 'react';
interface PostFormInputProps {
  label: string;
  type?: string;
  defaultValue: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  name: string;
  rows?: number;
}
const PostFormInput: React.FC<PostFormInputProps> = ({
  label,
  type = 'text',
  defaultValue,
  required = false,
  placeholder,
  className = '',
  name,
  rows,
}) => {
  const isTextarea = type === 'textarea' || rows;

  return (
    <div className={className}>
      <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide dark:text-gray-300">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          name={name}
          rows={rows || 4}
        />
      ) : (
        <input
          type={type}
          className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
          name={name}
        />
      )}
    </div>
  );
};

export default PostFormInput;
