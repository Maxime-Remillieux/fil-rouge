<?php

namespace App\EventListener;

use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;

class AuthenticationSuccessListener
{
/**
 * @param AuthenticationSuccessEvent $event
 * @param RoleHierarchyInterface $roleHierarchy
 */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $data['roles'] = $user->getRoles();
        $data['user'] = $user->getUserIdentifier();

        $event->setData($data);
    }

}

