package leetcode;
//给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
//
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
//
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//
// 示例 1:
//
// 输入: [1,2,3]
//输出: [1,2,4]
//解释: 输入数组表示数字 123。
//
//
// 示例 2:
//
// 输入: [4,3,2,1]
//输出: [4,3,2,2]
//解释: 输入数组表示数字 4321。
//
// Related Topics 数组
// 👍 556 👎 0

import java.util.Arrays;

/**
 * [66]加一
 *
 * @author: Liwncy
 * @date: 2020-10-13 09:04
 **/
public class Leet0066 {
    public static void main(String[] args) {
        Leet0066 leet = new Leet0066();
        System.out.println(Arrays.toString(leet.plusOne(new int[]{1, 2, 3})));
        System.out.println(Arrays.toString(leet.plusOne(new int[]{9})));

    }

    /**
     * 遍历,i位是9,变成0,不是9,加一返回;遍历完,加一位,0位赋一;
     * @param digits
     * @return
     */
    public int[] plusOne(int[] digits) {
        int dl = digits.length;
        for (int i = dl - 1; i >= 0; i--) {
            if (digits[i] != 9) {
                digits[i]++;
                return digits;
            }
            if (digits[i] == 9) {
                digits[i] = 0;
            }
        }
        digits = new int[dl + 1];
        digits[0] = 1;
        return digits;
    }
    public int[] plusOne1(int[] digits) {
        for (int i = digits.length - 1; i >= 0; i--) {
            digits[i]++;
            digits[i] = digits[i] % 10;
            if (digits[i] != 0) {
                return digits;
            }
        }
        digits = new int[digits.length + 1];
        digits[0] = 1;
        return digits;
    }
}
