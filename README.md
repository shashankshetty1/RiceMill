# 🌾 RiceMill Website

A simple rice mill business website built using **HTML, CSS, JS**, and connected to **Google Sheets** for storing contact form data.

## 🔧 Tech Used
- HTML5 + CSS3 + JavaScript
- Google Apps Script + Google Sheets

## ✨ Features
- Hero image slider
- Auto-sliding gallery
- Contact form with:
  - Google Sheet storage
  - Confirmation email to user

## 📬 Script Function (Google Apps Script)

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.email, data.phone, data.message, new Date()]);
  MailApp.sendEmail(data.email, "Thanks for Contacting!", `Hi ${data.name},\n\nYour message: "${data.message}"\n\n-RiceMill`);
  return ContentService.createTextOutput("Success");
}
