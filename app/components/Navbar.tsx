export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6">
      <h1 className="text-xl font-bold text-blue-400">
        Juwan Dobson
      </h1>

      <div className="flex gap-6">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}