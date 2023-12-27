export default class SubmitHandler {
  static extractFormData(e) {
    // Read the form data
    // const form = e.target
    const formData = new FormData(e.target)
    return formData
  }

  static buildFormJson(formData) {
    // You can pass formData as a fetch body directly:
    // fetch('/api/add-letter', { method: form.method, body: formData })

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries())
    formJson.recipientNames = formData.getAll('recipientNames')
    formJson.comments = formData.getAll('comments')

    // console.log(formJson)
    return formJson
  }

  static sendFormJson(formJson, method, endpoint) {
    fetch(endpoint, {
      method,
      body: JSON.stringify(formJson),
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      console.error('Error:', error)
    })
  }
}
