class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    printInfo() {
      console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}`);
    }
  }

  class EBook extends Book {
    constructor(title, author, year, fileFormat) {
      super(title, author, year);
      this.fileFormat = fileFormat;
    }
  
    printInfo() {
      console.log(
        `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`
      );
    }
  }

  const book = new Book("Майстер і Маргарита", "Михайло Булгаков", 1967);
  book.printInfo();
  
  const ebook = new EBook("Гаррі Поттер і філософський камінь", "Дж. К. Ролінг", 1997, "PDF");
  ebook.printInfo();