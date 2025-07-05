// Internationalization (i18n)

// Formatting Dates
const date = new Date();
const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});
console.log("Formatted Date:", dateFormatter.format(date)); // e.g., July 2, 2025

// Formatting Numbers
const number = 1234567.89;
const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
console.log("Formatted Currency:", numberFormatter.format(number)); // $1,234,567.89

// Formatting with Different Locales
const frNumberFormatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR"
});
console.log("French Currency:", frNumberFormatter.format(number)); // 1 234 567,89 €

// Best Practices
// Use Intl API for locale-specific formatting.
// Support multiple locales based on user preferences.
// Cache Intl formatters for performance in loops.
// Test formatting with various locales and edge cases.