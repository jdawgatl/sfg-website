
// This file is just for TypeScript type checking
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

/**
 * This file adds support for Tailwind CSS directives in CSS files
 * It eliminates the Visual Studio Code CSS validation errors
 */
