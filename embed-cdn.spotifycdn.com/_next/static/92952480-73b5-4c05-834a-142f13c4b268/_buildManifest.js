self.__BUILD_MANIFEST = function(s, e, i, a, t, d, c, o, r, u, n, p, b, h, f, k, l) {
    return {
        __rewrites: {
            afterFiles: [{
                has: d,
                source: "/embed/:path*",
                destination: c
            }, {
                has: d,
                source: "/embed-podcast/:path*",
                destination: c
            }, {
                has: d,
                source: "/embed-legacy/:path*",
                destination: c
            }, {
                has: d,
                source: "/oembed",
                destination: "/api/oembed"
            }, {
                has: d,
                source: "/iframe-api/:version*",
                destination: "/api/iframe-api/:version*"
            }, {
                has: d,
                source: "/user/:userid/:type/:id*",
                destination: "/:type/:id*"
            }],
            beforeFiles: [{
                has: [{
                    type: o,
                    key: "uri",
                    value: "spotify:user:(?<userid>.*):(?<type>.*):(?<id>.*)"
                }],
                source: c,
                destination: u
            }, {
                has: [{
                    type: o,
                    key: "uri",
                    value: "spotify:(?<type>.*):(?<id>.*)"
                }],
                source: c,
                destination: u
            }, {
                has: [{
                    type: o,
                    key: "uri",
                    value: "(?<protocol>.*)://(?<domain>.*)/(?<type>.*)/(?<id>.*)"
                }],
                source: c,
                destination: u
            }],
            fallback: []
        },
        "/": ["static/chunks/pages/index-50573ab09b45dae9.js"],
        "/_error": ["static/chunks/pages/_error-2830b004ff100455.js"],
        "/album/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/album/[id]-18969aedd1e3f888.js"],
        "/artist/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/artist/[id]-65736e7735d9f4e8.js"],
        "/episode/[id]": [s, e, i, a, t, b, h, "static/chunks/pages/episode/[id]-58118d806286722f.js"],
        "/episode/[id]/video": [s, e, i, f, a, t, k, l, "static/chunks/pages/episode/[id]/video-aee915d8ffbc7da5.js"],
        "/playlist/[id]": [s, e, i, a, t, n, p, "static/chunks/pages/playlist/[id]-917f214f51e51d4c.js"],
        "/show/[id]": [s, e, i, a, t, b, h, "static/chunks/pages/show/[id]-d65e7769955859d2.js"],
        "/show/[id]/video": [s, e, i, f, a, t, k, l, "static/chunks/pages/show/[id]/video-1890dd75f21ad50b.js"],
        "/track/[id]": [s, e, i, a, t, "static/css/b1e989768b9d294a.css", "static/chunks/pages/track/[id]-483815b1fdb2d6ff.js"],
        sortedPages: ["/", "/_app", "/_error", "/album/[id]", "/artist/[id]", "/episode/[id]", "/episode/[id]/video", "/playlist/[id]", "/show/[id]", "/show/[id]/video", "/track/[id]"]
    }
}("static/chunks/fec483df-87a6891f9916661b.js", "static/chunks/370d8c6a-ba7b9fa33b972102.js", "static/chunks/2049-d86aae427e069478.js", "static/css/a5f8353f13de43c7.css", "static/chunks/347-a59ba4453b7e7079.js", void 0, "/:path*", "query", "uri", "/:type/:id", "static/chunks/3666-e5aee60064d2ba28.js", "static/css/e704f0376d13fa6e.css", "static/css/3528eba8d37087ad.css", "static/chunks/7854-5e8e6f1fcd096dc0.js", "static/chunks/7644-4270403cddb74ab9.js", "static/chunks/4761-33ae6acfbd66f793.js", "static/css/0077e710e85441ed.css"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();