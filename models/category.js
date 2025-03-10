class Category {
	constructor(id, title, color) {
		this.id = id;
		this.title = title;
		this.color = color;
	}
}

export default Category;

/* 
클래스가 사용된 방법

// 클래스 정의
class Category {
  constructor(id, title, color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

// 실제 사용
new Category('c1', '이탈리아', '#f5428d')
// 결과: { id: 'c1', title: '이탈리아', color: '#f5428d' }

*/
