module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/css": "css"});
  eleventyConfig.addPassthroughCopy({"src/js": "js"});
  return {
    pathPrefix: "/bad_ui/",
    dir: {
      input: "src",
      output: "dist",
      includes: "include", 
    },
    htmlTemplateEngine: "njk"
  };
};
