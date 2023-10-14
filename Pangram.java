import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter the sentence");
        String sentence = scanner.nextLine();
        sentence = sentence.toUpperCase();
        sentence = sentence.replaceAll(" ","");
        char y[] = sentence.toCharArray();
        int size = y.length;
        int[] a = new int[26];
        int i = 0;
        while(i != size){
            int index = y[i] - 65;
            a[index] = 1;
            ++i;
        }
        i = 0;
        while(i != 26){
            if(a[i] == 1){
                ++i;
            }
            else{
                System.out.println("Given input is a non-Pangram");
                System.exit(0);
            }
        }
        System.out.println("Given input is a Pangram");

    }
}
