import java.util.Arrays;

public class MinimizeHeightII {

    static int minimize(int[] arr, int k) {
        // Take the half of the max height
        int last = Math.round(arr[arr.length - 1] / 2);
        Arrays.sort(arr);
        // int[] modArr = new int[arr.length];
        // for (int i = 0; i < arr.length; i++) {
        //     if(arr[i] <= last) {
        //         temp = arr[i] + k;
        //     } else {
        //         temp = arr[i] - k;
        //     }
        //     modArr[i] = temp;
        // }
        // System.out.println(Arrays.toString(modArr));

        int small = arr[0] + k;
        int big = arr[arr.length - 1] - k;

        if(small > big) {
            int temp = small;
            small = big;
            big = temp;
        }
        
        for (int i = 1; i < arr.length - 1; i++) {
            int tempSmall = arr[i] - k;
            int tempBig = arr[i] + k;

            if(small <= tempSmall || big <= tempBig) {
                continue;
            }

            
        }


        return big - small;
    }

    public static void main(String[] args) {
        int[] arr = {6, 10};
        int k = 3;
        int minDiff = MinimizeHeightII.minimize(arr, k);
        System.out.println(minDiff);
    }
    
}
