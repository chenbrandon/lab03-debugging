class stringProcessor{
    private data: string;
    constructor(input: string){
        this.data = input;
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        this.data = this.data.split('').reverse().join("");
        /*
        this.data = "";
        //let chars: string[] = this.data.split('');
        for(let i = chars.length - 1; i >= 0; i--) {
            this.data = this.data + chars[i];
        }
        */
    }
}
let x: stringProcessor = new stringProcessor("abcdefg");
console.log(x.getString());
x.reverse();
console.log(x.getString());
