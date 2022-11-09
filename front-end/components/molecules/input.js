import React from "react"

const Error = ({ label, message }) => {
  return (
    <p className="text-red-900 text-xs  mb-3">
      *{message ? message : `${label} é obrigatório`}
    </p>
  )
}

const Input = ({ register, type, name, label, rule, placeholder, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-grey-darker text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        placeholder={placeholder}
        type={type}
        {...register(name, rule)}
        {...rest}
      />
    </div>
  )
}

const InputDouble = ({
  register,
  subtitle,
  name,
  label,
  rule,
  type,
  name2,
  label2,
  rule2,
  ...rest
}) => {
  return (
    <div className="flex mb-4">
      <div className="w-1/2 mr-1 ">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          {...register(name, rule)}
          {...rest}
          type={type}
        />
        {subtitle && <p className="text-grey text-xs mt-1">{subtitle}</p>}
      </div>
      <div className="w-1/2 mr-1 ">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor={name2}
        >
          {label2}
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type={type}
          {...register(name2, rule2)}
          {...rest}
        />
      </div>
    </div>
  )
}

const Select = ({ register, rule, options, name, label, ...rest }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-grey-darker text-sm
             font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="mt-1 block w-full py-2 px-3 border text-grey-darker bg-white rounded  focus:outline-none focus:ring-indigo-500  sm:text-sm"
        {...register(name, rule)}
        {...rest}
      >
        {options.map((value, idx) => (
          <option key={idx} value={value.value}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  )
}
const Textarea = ({ register, name, label, rule, ...rest }) => {
  return (
    <div>
      <label
        className="block text-grey-darker text-sm
             font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        className="mt-1 block w-full py-2 px-3 border text-grey-darker bg-white rounded  focus:outline-none focus:ring-indigo-500  sm:text-sm mb-5"
        {...register(name, rule)}
        {...rest}
      ></textarea>
    </div>
  )
}

const SubmitButton = ({ name, name2, onClick2, ...rest }) => {
  return (
    <div className="flex items-center justify-between ">
      <button
        className="bg-black text-white hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center hover:text-black "
        type="submit"
        {...rest}
      >
        {name}
      </button>
      {name2 && (
        <button
          className="bg-white text-black border  border-black  hover:border-gray-400 hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => onClick2()}
          {...rest}
        >
          {name2}
        </button>
      )}
    </div>
  )
}

const Button = ({
  name,
  name2,
  onClick2,
  bgColor,
  charColor,
  icon,
  ...rest
}) => {
  return (
    <div>
      <button
        style={{ backgroundColor: bgColor, color: charColor }}
        className="hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center hover:text-black "
        type="submit"
        {...rest}
      >
        {name}
      </button>
      {name2 && (
        <button
          className="bg-white text-black border  border-black  hover:border-gray-400 hover:bg-gray-400  font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={() => onClick2()}
          {...rest}
        >
          {name2} {icon}
        </button>
      )}
    </div>
  )
}

export { Error, Input, InputDouble, Select, Textarea, SubmitButton, Button }
