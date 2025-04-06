interface FooterProps {
  onNavigate: {
    home: () => void;
    about: () => void;
    projects: () => void;
    contact: () => void;
  };
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Darshan. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <button onClick={onNavigate.home} className="hover:text-primary-300 transition-colors">Home</button>
            <button onClick={onNavigate.about} className="hover:text-primary-300 transition-colors">About</button>
            <button onClick={onNavigate.projects} className="hover:text-primary-300 transition-colors">Projects</button>
            <button onClick={onNavigate.contact} className="hover:text-primary-300 transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
