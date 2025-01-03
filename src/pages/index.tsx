import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="container-center my-10 min-h-full flex-1">
        <div className="banner">
          <Image
            className="avatar"
            src="/profile.png"
            width={200}
            height={200}
            alt="Cong Dao's avatar"
          />
          <div className="about-me">
            <h1 className="text-4xl font-bold">{"Hi there, I'm Cong!"}</h1>
            <p>I&apos;m a software developer, a learner...</p>
          </div>
        </div>
        <p className="mt-10">Welcome to my space on the web</p>
        {/* <div className="p-2 my-5 bg-blue-100 rounded shadow-sm">
          I&apos;m currently working on feedback application that allows people
          create their own feedback space and get feedbacks from their customer.
          Please take a look{' '}
          <Link
            href="https://feedback.congdv.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-bold hover:underline"
          >
            here
          </Link>
        </div> */}
        <ul className="mt-2 ml-5 list-disc">
          <li>
            <Link href="/words" className="font-bold hover:underline">
              words:
            </Link>{' '}
            Writing my learning notes
          </li>
          <li>
            <Link
              href="https://stubify.congdv.com/"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay Stub Generated App:
            </Link>{' '}
            The app helps people create their own pay stub for free
          </li>
          <li>
            <Link
              href="https://feedback.congdv.com/"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feedback app:
            </Link>{' '}
            Feedback app that allows people create their own feedback space and
            get feedbacks from their customer
          </li>
          <li>
            <Link
              href="https://notemd.congdv.com/"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              notemd.app:
            </Link>{' '}
            A text editor for writing Markdown with Vim&apos;s key binding
          </li>
          <li>
            <Link
              href="https://congdv.github.io/snake-clone/"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              snake game:
            </Link>{' '}
            A web-based snake game
          </li>
          <li>
            <Link
              href="https://30daysofsharing.congdv.com/"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              30 days of sharing:
            </Link>{' '}
            A collection to share knowledge in frontend/web development that was
            organized by WeBuild Community
          </li>
        </ul>
        <p className="mt-10">Open source projects that I contributed</p>
        <ul className="mt-2 ml-5 list-disc">
          <li>
            <Link
              href="https://github.com/UniversalDataTool/universal-data-tool"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Universal Data Tool:
            </Link>{' '}
            Collaborate & label any type of data, images, text, or documents, in
            an easy web interface or desktop app.
          </li>
        </ul>
      </main>
    </>
  )
}
