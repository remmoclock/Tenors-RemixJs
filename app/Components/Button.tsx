function Button({ title }) {
  return (
    <button className="p-4 m-2 text-xl font-medium transition duration-200 ease-in-out bg-gray-900 rounded-xl hover:shadow-lg hover:bg-indigo-600 hover:text-white">
      {title}
    </button>
  );
}

export default Button;
