<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit1227b273dd758bc4b0e0b2464de84c5f
{
    public static $prefixesPsr0 = array (
        'S' => 
        array (
            'Slim' => 
            array (
                0 => __DIR__ . '/..' . '/slim/slim',
            ),
        ),
    );

    public static $classMap = array (
        'PiramideUploader' => __DIR__ . '/../..' . '/piramide-uploader/PiramideUploader.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit1227b273dd758bc4b0e0b2464de84c5f::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit1227b273dd758bc4b0e0b2464de84c5f::$classMap;

        }, null, ClassLoader::class);
    }
}
