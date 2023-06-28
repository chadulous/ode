const PATH = Deno.env.get('PATH')?.split(':');
delete PATH?.[PATH?.findIndex((v) => v === "/Library/Frameworks/Mono.framework/Versions/Current/Commands")]
delete PATH?.[PATH?.findIndex((v) => v === "/Users/maverickdev/Documents/apache-maven-3.8.4/bin")]
console.log(PATH?.join(':'))