export default function GitDiff() {
  return (
    <div>
      <h1 className="mb-4 text-xl">How to read a git diff</h1>
      <p className="mb-2 text-neutral-400">
        We stumble upon git diffs almost daily whether on purpose or on accident. Have you ever wondered what it all means?
        Let's start with the block of code below. 
      </p>
      <p className="mb-2 text-neutral-400">
        PS ~ If you want to follow along with your own code, open up a PR
        in GitHub and add '.diff' to the end of the URL.
      </p>

      <div className="my-6 p-3 text-sm border border-neutral-800 rounded-lg">
        <p>diff --git a/page.js b/page.js </p>
      </div>
    </div>
  )
}