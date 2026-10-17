perform()


async function perform() {
  await performBlockMediumPopup()
}


async function performBlockMediumPopup() {
  // works as of 2026 Oct 17
  const blockerSelector = 'div > div[data-focus-lock-disabled="false"] > div[role="dialog"][aria-modal="true"]'

  const blocker = await waitForElement(blockerSelector, 30000)
  if (!blocker) {
    console.log('[m]🤡 1) No blocker found')
    return
  }

  console.log('[m]🤡 2) Found the blocker and squashed it')

  blocker.parentElement?.parentElement?.remove()
  document.body.style = ''
}



/**
 * Waits the provided milliseconds for an element to appear or returns null. Supports callbacks and promises.
 * 
 * Source: https://github.com/tinacious/user-script-utils/blob/main/src/wait-for-element.ts
 *
 * @param selector  Selector to pass to document.querySelector()
 * @param timeout   Max time to wait, in millis
 * @param cb        Callback to execute after the element is found. Argument is the found element
 * @document ./wait-for-element-example.md
 */
function waitForElement(
  selector,
  timeout,
  cb,
) {
  const promise = new Promise((resolve) => {
    let time = 0

    const interval = 100

    const intervalId = setInterval(() => {
      if (time >= timeout) {
        clearInterval(intervalId)
        return resolve(null)
      }

      time += interval

      const result = document.querySelector(selector)
      if (result) {
        clearInterval(intervalId)
        return resolve(result)
      }
    }, interval)
  })

  return cb ? promise.then(cb) : promise
}