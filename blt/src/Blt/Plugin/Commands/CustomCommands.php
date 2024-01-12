<?php

namespace Example\Blt\Plugin\Commands;

use Acquia\Blt\Robo\BltTasks;

class CustomCommand extends BltTasks {

  /**
   * Executes the custom command.
   *
   * @command greet
   *
   * @param string $arg
   *   The argument for the custom command.
  */
  public function customCommand($arg = null) {
    $this->say("Hello BLT, $arg! Welcome to the BLT pratice.");
  }
}
