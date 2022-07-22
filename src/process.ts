Object.assign(window, {
  process: {
    env: {
      NODE_ENV: "dev"
    }
  }
})

export const hello = "World!"
