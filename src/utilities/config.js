export const APP_NAME = "Oases Solar";
export const GOOGLE_SHEET_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzq15UKqbWMsNgSWp4E9itsEeLGbzFQurwcMv9aUpQDGRWSOV7OokZy6ZA07zY3X63B/exec";
export const BACK_END_URL = "https://be.";
export const RECAPTCHA_SITEKEY = "6Ld0FCkTAAAAAKT5zY1P6F2K7pUzPpUskzkIZ7uD"; //localhost
//export const RECAPTCHA_SITEKEY = "6LflGHYiAAAAAGC1KF21QWZTAOPhxqQ2023VTA8E"; //live

export const KNOWN_BRAND = ['ashaway', 'astec', 'babolat', 'flypower', 'gosen', 'lining', 'victor', 'wilson', 'yonex'];
export const STATUS = [
    { string: 'error', icon: 'close', text: 'Canceled'},
    { string: 'on-progress', icon: 'hourglass_top', text: <>On<br/>progress</>},
    { string: 'on-progress', icon: 'hourglass_bottom', text: <>On<br/>progress</>},
    { string: 'success', icon: 'check', text: 'Done'},
    { string: 'success', icon: 'done_all', text: 'Picked up'},
];