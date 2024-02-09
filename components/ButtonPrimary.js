export default function ButtonPrimary({ children, onClick }) {
    return (
      <button className="bg-primary text-white py-2 px-4 rounded" onClick={onClick}>
        {children}
      </button>
    );
  }