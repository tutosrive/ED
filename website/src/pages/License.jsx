import './License.css'

function License() {
  const licenseText = `GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.`

  return (
    <>
      <section className="page-header">
        <h1>📄 Licencia</h1>
        <p>Este proyecto está licenciado bajo GNU General Public License v3</p>
      </section>

      <section className="content-section">
        {/* License Summary */}
        <div className="content-card glass-card">
          <h2>📋 Resumen de la Licencia</h2>
          <p>
            Este proyecto está bajo la licencia <strong>GNU General Public License v3 (GPL-3.0)</strong>, 
            una licencia de software libre copyleft que garantiza las siguientes libertades:
          </p>
          <ul>
            <li>✅ <strong>Libertad de uso:</strong> Puedes usar el software para cualquier propósito.</li>
            <li>✅ <strong>Libertad de estudio:</strong> Puedes estudiar cómo funciona el programa y adaptarlo a tus necesidades.</li>
            <li>✅ <strong>Libertad de distribución:</strong> Puedes redistribuir copias del software.</li>
            <li>✅ <strong>Libertad de mejora:</strong> Puedes mejorar el programa y publicar tus mejoras.</li>
          </ul>
        </div>

        {/* Conditions */}
        <div className="content-card glass-card">
          <h2>⚠️ Condiciones</h2>
          <ul>
            <li>📝 <strong>Divulgación del código fuente:</strong> Si distribuyes el software, debes hacerlo con el código fuente o proporcionar acceso a él.</li>
            <li>📝 <strong>Misma licencia:</strong> Las obras derivadas deben distribuirse bajo la misma licencia GPL-3.0.</li>
            <li>📝 <strong>Avisos de copyright:</strong> Debes mantener los avisos de copyright y licencia originales.</li>
            <li>📝 <strong>Documentar cambios:</strong> Debes documentar los cambios significativos realizados al software.</li>
          </ul>
        </div>

        {/* Permissions */}
        <div className="content-card glass-card">
          <h2>✅ Permisos</h2>
          <div className="permissions-grid">
            <div className="permission-item allowed">
              <span className="icon">✅</span>
              <span>Uso comercial</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">✅</span>
              <span>Modificación</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">✅</span>
              <span>Distribución</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">✅</span>
              <span>Uso de patentes</span>
            </div>
            <div className="permission-item allowed">
              <span className="icon">✅</span>
              <span>Uso privado</span>
            </div>
          </div>
        </div>

        {/* Limitations */}
        <div className="content-card glass-card">
          <h2>❌ Limitaciones</h2>
          <div className="permissions-grid">
            <div className="permission-item denied">
              <span className="icon">❌</span>
              <span>Sin garantía</span>
            </div>
            <div className="permission-item denied">
              <span className="icon">❌</span>
              <span>Sin responsabilidad</span>
            </div>
          </div>
        </div>

        {/* Full License */}
        <div className="content-card glass-card">
          <h2>📜 Texto Completo de la Licencia</h2>
          <p>
            A continuación se muestra un extracto del texto de la licencia. Para ver el texto completo, 
            visita el <a href="https://github.com/tutosrive/ED/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">archivo LICENSE en GitHub</a>.
          </p>
          <pre className="license-text">{licenseText}</pre>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <a 
              href="https://www.gnu.org/licenses/gpl-3.0.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              📖 Ver Licencia Completa en GNU.org
            </a>
          </div>
        </div>

        {/* Credits */}
        <div className="content-card glass-card">
          <h2>👥 Créditos y Atribución</h2>
          <p>
            Este proyecto fue desarrollado como parte del curso de <strong>Estructuras de Datos</strong> 
            en la <strong>Universidad de Caldas</strong>.
          </p>
          <div className="credits-grid">
            <div className="credit-item">
              <h3>👨‍🎓 Santiago Rivera Marin</h3>
              <p>Estudiante - 4to Semestre</p>
              <p>Ingeniería de Sistemas y Computación</p>
              <a href="https://github.com/tutosrive" target="_blank" rel="noopener noreferrer">
                🐙 @tutosrive
              </a>
            </div>
            <div className="credit-item">
              <h3>👨‍🏫 Profesor Jotarlo</h3>
              <p>Docente del Curso</p>
              <p>Universidad de Caldas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default License
