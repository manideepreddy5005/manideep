import java.util.*;

public class Shuffle {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("enter the size of the array");
        int n = scanner.nextInt();
        ArrayList<Integer> array = new ArrayList<>(n);
        System.out.println("enter the array numbers");
        for(int i=0;i<n;i++){
            array.add(scanner.nextInt());
        }
        System.out.println(array);
        Collections.shuffle(array);
        System.out.println("shuffled Array");
        for(int value :  array){
            System.out.print(value + " ");
        }
    }
}
