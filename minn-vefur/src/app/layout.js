import './globals.css'

export const metadata = {
  title: 'Stefán Ólafur - Markþjálfi',
  description: 'Vottaður markþjálfi - Kulnun, ADHD og viðskipti',
}

export default function RootLayout({ children }) {
  return (
    <html lang="is">
      <head>
        {/* Netlify Identity widget - Þetta VERÐUR að vera í head til að CMS innskráning virki */}
        <script 
          src="https://identity.netlify.com/v1/netlify-identity-widget.js" 
          async 
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Þessi skrifta sér um að senda notandann í /admin eftir að hann skráir sig inn */}
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