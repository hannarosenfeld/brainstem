const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/posts")
let postList = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("🚨 Failed to list contents of directory" + err)
        }

        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)){
                        acc.push(i)
                    }
                    return acc
                }

                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, 
                        metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(":")[1]
                        })
                        return obj
                    }
                }

                const parseContent = ({ lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1,
                        lines.length
                        )
                        return lines.join("\n")
                    }
                }

                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})

                const post = {
                    id: i + 1,
                    title: metadata.title ? metadata.title : "No title given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given"
                }

                postList.push(post)

                if (i === files.length - 1) {
                    let data = JSON.stringify(postList)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    return
}

getPosts()
