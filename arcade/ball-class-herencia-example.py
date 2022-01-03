import arcade

SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480


class Figura:
    """ This class manages a figura bouncing on the screen. """

    def __init__(self, position_x, position_y, change_x, change_y, radius, color):
        """ Constructor. """

        # Take the parameters of the init function above, and create instance variables out of them.
        self.position_x = position_x
        self.position_y = position_y
        self.change_x = change_x
        self.change_y = change_y
        self.radius = radius
        self.color = color

    def draw(self):
        """ Draw the figuras with the instance variables we have. """
        pass
        #arcade.draw_circle_filled(self.position_x, self.position_y, self.radius, self.color)

    def update(self):
        """ Code to control the figura's movement. """
        pass
       

class Fons():
    pass

class Ball(Figura):
    def draw(self):
        """ Draw the figuras with the instance variables we have. """
        arcade.draw_circle_filled(self.position_x, self.position_y, self.radius, self.color)
    
    def update(self):
    # Move the figura
        self.position_y += self.change_y
        self.position_x += self.change_x

        # See if the figura hit the edge of the screen. If so, change direction
        if self.position_x < self.radius:
            self.change_x *= -1

        if self.position_x > SCREEN_WIDTH - self.radius:
            self.change_x *= -1

        if self.position_y < self.radius:
            self.change_y *= -1

        if self.position_y > SCREEN_HEIGHT - self.radius:
            self.change_y *= -1

class Quadrat(Figura):
    def draw(self):
        arcade.draw_rectangle_filled(self.position_x,self.position_y,self.radius,self.radius,self.color)
    def update(self):
    # Move the figura
        self.position_y += self.change_y
        self.position_x += self.change_x

        # See if the figura hit the edge of the screen. If so, change direction
        if self.position_x < (self.radius/2):
            self.change_x *= -1

        if self.position_x > SCREEN_WIDTH - (self.radius/2):
            self.change_x *= -1

        if self.position_y < (self.radius/2):
            self.change_y *= -1

        if self.position_y > SCREEN_HEIGHT - (self.radius/2):
            self.change_y *= -1


class MyGame(arcade.Window):

    def __init__(self, width, height, title):

        # Call the parent class's init function
        super().__init__(width, height, title)
        arcade.set_background_color(arcade.color.ASH_GREY)

        # Create a list for the figuras
        self.figure_list = []

        # Add three figuras to the list
        figura = Ball(50, 50, 3, 3, 15, arcade.color.AUBURN)
        self.figure_list.append(figura)

        figura = Quadrat(100, 150, 2, 3, 30, arcade.color.PURPLE_MOUNTAIN_MAJESTY)
        self.figure_list.append(figura)

        figura = Ball(150, 250, -3, -1, 15, arcade.color.FOREST_GREEN)
        self.figure_list.append(figura)

    def on_draw(self):
        """ Called whenever we need to draw the window. """
        arcade.start_render()

        # Use a "for" loop to pull each figura from the list, then call the draw
        # method on that figura.
        for figura in self.figure_list:
            figura.draw()

    def update(self, delta_time):
        """ Called to update our objects. Happens approximately 60 times per second."""

        # Use a "for" loop to pull each figura from the list, then call the update
        # method on that figura.
        for figura in self.figure_list:
            figura.update()


def main():
    window = MyGame(640, 480, "Drawing Example")

    arcade.run()


main()
