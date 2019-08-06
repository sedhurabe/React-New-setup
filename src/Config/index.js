export const baseUrl = process.env.NODE_ENV !== 'production'? 'https://jsonplaceholder.typicode.com': 'No';

export const language = ["english", "chinese"];

export const menuList = ["Overview", "Pay Now", "Create payment plan", "Request Callback"];

export const themeColor = (buttonColor, textColor) =>({
    backgroundColor: buttonColor,
    color:textColor
  })