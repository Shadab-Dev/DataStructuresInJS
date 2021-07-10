public class rotation {
    static boolean isRotation(String str1, String str2) {
        if(str2.length()!=str1.length()) {
            return false;
        } else {
            return ((str1 + str1).indexOf(str2) != -1);
        }
    }
    
    public static void main(String[] args) {
        String str1 = "ABCD";
        String str2 = "CDAB";
        System.out.println(isRotation(str1, str2));
    }
}
