import './globals.css'

export const metadata = {
  title: 'Stefán Ólafur - Markþjálfi',
  description: 'Vottaður markþjálfi - Kulnun, ADHD og viðskipti',
}

export default function App({ children }) {
  return (
    <html lang="is">
      <head>
        {/* Netlify Identity widget - Nauðsynlegt fyrir CMS innskráningu */}
        <script 
          src="https://identity.netlify.com/v1/netlify-identity-widget.js" 
          async 
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Skrifta sem sér um að senda þig í /admin eftir að þú skráir þig inn */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}