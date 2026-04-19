import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // Þú þarft að keyra: npm install gray-matter
import Link from 'next/link'
import { Calendar, ChevronRight, ArrowLeft } from 'lucide-react'

// Þetta fall sækir allar greinar úr CMS möppunni (Server Component)
async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'minn-vefur/content/frettir')
  
  // Ef mappan er ekki til ennþá (t.d. í fyrsta skipti), skilum tómum lista
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // gray-matter dregur út "metadata" (titil, dagsetningu o.fl.) efst úr skránni
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    }
  })

  // Röðum eftir dagsetningu (nýjast efst)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default async function FrettirPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-[#FDFDFD] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">
                <ArrowLeft size={18} /> Aftur á forsíðu
            </Link>
        </div>

        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight font-serif italic text-slate-900 uppercase">
            Fréttir & Greinar
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium italic max-w-2xl mx-auto leading-relaxed">
            Hér birtast allar pælingar og fréttir sem þú skrifar í gegnum Netlify CMS stjórnborðið.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <p className="text-slate-400 font-bold uppercase tracking-widest">
                Engar greinar fundust í CMS ennþá. <br/>
                Prófaðu að búa til nýja frétt í stjórnborðinu!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {posts.map((post) => (
              <div 
                key={post.slug}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {post.category || 'Almennt'}
                  </span>
                  <span className="text-xs text-slate-400 font-bold flex items-center gap-2 uppercase tracking-tighter">
                    <Calendar size={14} /> {post.date ? new Date(post.date).toLocaleDateString('is-IS') : 'Engin dags.'}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 uppercase tracking-tight text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                  {post.excerpt || 'Smelltu til að lesa alla greinina...'}
                </p>
                <div className="mt-auto flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#008B51] group-hover:gap-4 transition-all cursor-pointer">
                  Lesa meira <ChevronRight size={18} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}