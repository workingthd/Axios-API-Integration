const signIn = async ({ body }) => {
  try {
    const Userlogin = await axios.post(
      process.env.Base_Url + '/wp-json/eh/v1/customauth',
      new URLSearchParams({
        username: body.username,
        password: body.password
      })
    )
    if (Userlogin.data.code == 200) {
      return {
        type: 'success',
        message: 'User Login',
        data: Userlogin.data
      }
    } else {
      return { type: 'bad', message: 'User not found!' }
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}
