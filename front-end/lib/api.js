import NotesApi from "./api/NotesApi"

export async function getPostSlugs() {
  const service = new NotesApi()
  return service.getNotes()
}
export async function getPostById(id) {
  const service = new NotesApi()
  return service.getNote(id)
}

export async function getAllPosts() {
  const slugs = await getPostSlugs()
  return slugs
    .map((a) => a.id.toString())
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))
}
