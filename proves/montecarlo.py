import random

def cal_pi(n):
    r = 1.0
    center_x, center_y = (0.0, 0.0)
    x_left, x_right = center_x - r, center_x + r
    y_up, y_down = center_y - r, center_y + r

    in_circle = 0

    for i in range(n):
        x = random.uniform(x_left, x_right)
        y = random.uniform(y_up, y_down)
        if (x**2 + y**2 <= 1.0**2):
            in_circle += 1

    pi = (in_circle/float(n)) * 4.0
    return pi

if __name__ == '__main__':
   PI = cal_pi(100000)
   print("Estimating PI using Monte Carlo simulation:", PI)
print("hola")
# Expected output:
# Estimating PI using Monte Carlo simulation: 3.1388