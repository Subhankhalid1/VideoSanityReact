 export default{
  title: "Video blog post",
  name: "videoBlogPost",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      title: "Video file",
      name: "video",
      type: "mux.video"
    }
  ]
}

  
//     prepare(selection) {
//       const {author} = selection
//       return Object.assign({}, selection, {
//         subtitle: author && `by ${author}`,
//       })
//     },
//   },
// }
