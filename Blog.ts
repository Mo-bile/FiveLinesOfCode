// // getter와 setter제거 초기코드
// class Website {
//     constructor (private url: string){}
//     getUrl() { return this. url;}
// }
// class User {
//     constructor (private username: string) {}
//     getusername() {return this.username};
// }
// class BlogPost {
//     constructor (private author: User, private id: string) {}
//     getId() { return this.id; } 
//     getAuthor () { return this. author; }
// }

// function generatePostLink(website: Website, post: BlogPost) {
//     let url = website.getUrl();
//     let user = post.getAuthor();
//     let name = user.getUsername();
//     let postId = post.getId();
//     return url + name + postId;
// }

// 1. private로 변경 / 클래스로 코드 이관으로 오류수정
class Website {
    constructor (private url: string){}
    getUrl() { return this. url;}
}
class User {
    constructor (private username: string) {}
    getusername() {return this.username};

}
class BlogPost {
    constructor (private author: User, private id: string) {}
    getId() { return this.id; } 
    // private getAuthor() { return this.author; } -> 사용하지 않으므로 삭제

    getAuthorName(){
        return this.author.getUsername(); //push 형으로 username을 바로 받음
    };
}

function generatePostLink(website: Website, post: BlogPost) {
    let url = website.getUrl();
    // let user = post.getAuthor(); // pull형으로 접근할 필요가 없어짐
    let name = user.getUsername();
    let postId = post.getId();
    return url + name + postId;
}
