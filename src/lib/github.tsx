
export const getGithubPages = (linkHeader: any) => {
    let nextPage = null, lastPage = null;

    if (linkHeader) {
        const links = linkHeader.split(", ");
        for (const link of links) {
            const match = link.match(/<(.*?)>; rel="(.*?)"/);
            if (match) {
                const url = match[1];
                const rel = match[2];
                const pageMatch = url.match(/&page=(\d+)/);
                if (pageMatch) {
                    const pageNum = parseInt(pageMatch[1], 10);
                    if (rel === "next") nextPage = pageNum;
                    if (rel === "last") lastPage = pageNum;
                }
            }
        }
    }
    return { nextPage, lastPage };
  }