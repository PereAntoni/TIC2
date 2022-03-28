#bolla
import arcade
import math

SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480



class Ball:
    """ This class manages a ball bouncing on the screen. """

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
        """ Draw the balls with the instance variables we have. """
        arcade.draw_circle_filled(self.position_x, self.position_y, self.radius, self.color)

    def canvia(self):
        print("canvia")
        if (self.color == arcade.color.YALE_BLUE):
            self.color = arcade.color.RED
        else:
           self.color = arcade.color.YALE_BLUE 

    def update(self):
        """ Code to control the ball's movement. """

        # Move the ball
        self.position_y += self.change_y
        self.position_x += self.change_x

        # See if the ball hit the edge of the screen. If so, change direction
        if self.position_x < self.radius:
            self.change_x *= -1

        if self.position_x > SCREEN_WIDTH - self.radius:
            self.change_x *= -1

        if self.position_y < self.radius:
            self.change_y *= -1

        if self.position_y > SCREEN_HEIGHT - self.radius:
            self.change_y *= -1

class Colisionador:
    def _init__():
        pass

    def colisio(self,a,b):
        distancia = math.sqrt(math.pow((a.position_x - b.position_x),2) + math.pow((a.position_y - b.position_y),2))
        #print(distancia)
        if distancia <= (a.radius + b.radius):
            return True
        else:
            return False



class snowPerson:
    def _init__(self,x,y):
    # Draw a snow person
        self.px=x
        self.py=y

    def draw(self):
    # Snow
        arcade.draw_circle_filled(300, 200, 60, arcade.color.WHITE)
        arcade.draw_circle_filled(300, 280, 50, arcade.color.WHITE)
        arcade.draw_circle_filled(300, 340, 40, arcade.color.WHITE)

        # Eyes
        arcade.draw_circle_filled(285, 350, 5, arcade.color.BLACK)
        arcade.draw_circle_filled(315, 350, 5, arcade.color.BLACK)        

class MyGame(arcade.Window):

    def __init__(self, width, height, title):

        # Call the parent class's init function
        super().__init__(width, height, title)

        # Set the background color
        arcade.set_background_color(arcade.color.ASH_GREY)

        self.llista = []
        self.player_list = []
        # Attributes to store where our ball is
        self.rupit = arcade.Sprite(":resources:images/items/coinGold.png",1)
        self.rupit.center_x = 64
        self.rupit.center_Y = 120
        self.player_list.append(self.rupit)

        self.llista.append(Ball(50, 50, 3, 3, 20, arcade.color.AUBURN))
        self.llista.append(Ball(150, 50, 12, 13, 20, arcade.color.AUBURN))
        self.colisionar = Colisionador()



    def on_draw(self):
        """ Called whenever we need to draw the window. """
        arcade.start_render()
        self.player_list.draw()
        for i in range(len(self.llista)):
            #print("som dins llista")
            self.llista[i].draw()
        


    def update(self, delta_time):
        """ Called to update our objects. Happens approximately 60 times per second."""
        for i in range(len(self.llista)):
            self.llista[i].update()

def main():
    window = MyGame(640, 480, "Drawing Example")

    arcade.run()


main()