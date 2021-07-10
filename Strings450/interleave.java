public class interleave {

    static boolean isInterleaved(String A, String B, String C) {
        int i = 0, j = 0, k = 0;
        while (k < C.length()){
            // Check if element at A[i] is equal to element at C[k], then increment i
            if(i<A.length() && A.charAt(i) == C.charAt(k)) {
                i++;
            } 
             // Check if element at B[j] is equal to element at C[k], then increment j
            else if (j<B.length() && B.charAt(j) == C.charAt(k)) {
                j++;
            } 
            // If no element is found in both the strings then return false 
            else {
                return false;
            }
            k++;
        }
        return true;
    }

    public static void main(String[] args) {
        String A = "AB";
        String B = "CD";
        String C = "ACDB";
        if (isInterleaved(A, B, C) == true)
            System.out.printf("%s is interleaved of %s and %s", C, A, B);
        else
            System.out.printf("%s is not interleaved of %s and %s", C, A, B);
    }
    
}
