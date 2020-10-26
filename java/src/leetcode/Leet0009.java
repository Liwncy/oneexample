package leetcode;
//判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
//
// 示例 1:
//
// 输入: 121
//输出: true
//
//
// 示例 2:
//
// 输入: -121
//输出: false
//解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
//
//
// 示例 3:
//
// 输入: 10
//输出: false
//解释: 从右向左读, 为 01 。因此它不是一个回文数。
//
//
// 进阶:
//
// todo:你能不将整数转为字符串来解决这个问题吗？
// Related Topics 数学
// 👍 1250 👎 0

/**
 * [9]回文数
 *
 * @author: Liwncy
 * @date: 2020-09-29 15:28
 **/
public class Leet0009 {
    public static void main(String[] args) {
        Leet0009 leet = new Leet0009();
        System.out.println(leet.isPalindrome(123454321));
    }

    /**
     * 倒着写一半看是否和原数的一半相同
     * @param x
     * @return
     */
    public boolean isPalindrome(int x) {
        boolean flag = false;
        // 1,必定不为回文数的整数:负数,除0外以0结尾的正整数
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        // 2,循环,re为从后往前写的数字,x/10减一位,x不比re大时退出循环
        int re = 0;
        while (x > re) {
            re = re * 10 + x % 10;
            x /= 10;
        }
        // 3,数字位数是偶数时,x和re相等;奇数时,x和re/10相等;
        flag = x == re || x == re / 10;
        return flag;
    }
}
