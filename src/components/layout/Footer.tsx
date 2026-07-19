import { content } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold text-white font-tajawal mb-2">{content.header.logo}</h3>
          <p className="text-sm max-w-md text-slate-400">{content.footer.text}</p>
        </div>
        
        <div className="text-center md:text-left text-sm text-slate-500">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
